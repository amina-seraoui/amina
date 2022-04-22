import {useEffect, useState} from 'react'

const TypingText = ({ texts, replaces }) => {
    const speed = 115
    const len = texts.length
    const skipDelay = 20
    const [textIndex, setTextIndex] = useState(0)

    const [letterIndex, setLetterIndex] = useState(0)
    const [words, setWords] = useState('')
    const [forward, setForward] = useState(true)
    const [skipCount, setSkipCount] = useState(0)
    const [display, setDisplay] = useState('')

    useEffect(() => {
        const interval = setTimeout(() => {
            if (!forward) { // à l'envers
                if (words.length > 0) // encore une lettre ?
                    setWords(words => words.substring(0, words.length - 1)) // on retire une lettre
                else setForward(true) // plus de lettres -> on retourne à l'endroit
            } else {
                if (textIndex < len) { // il reste des textes
                    if (letterIndex < texts[textIndex].length) { // il reste des lettres
                        setWords(words => words + texts[textIndex][letterIndex])
                        setLetterIndex(i => i+1)
                    } else { // il ne reste plus de lettre
                        if (skipCount < skipDelay) { // on attend
                            setSkipCount(i => i+1)
                        } else { // on passe à la suite
                            setSkipCount(0)
                            setLetterIndex(0)
                            setTextIndex(i => i+1)
                            setForward(false)
                        }
                    }
                } else { // il ne reste plus de texte -> on repart à 0
                    setTextIndex(0)
                }
            }

            /** Remplacer et mettre en valeur certain mots **/
            let text = words
            replaces.forEach(replace => {
                let match = false
                let what = ''
                let by = replace.by

                // trouver le mot à remplacer
                if (replace.type === 'regex') {
                    match = words.match(replace.what)
                    what = match !== null ? match[0] : ''
                    by = replace.by.replace('{match}', what)
                } else if (replace.type === 'text') {
                    match = words.includes(replace.what)
                    what = replace.what
                }

                // le remplacer
                if (match) {
                    if (replace.action === 'replace') {
                        text = text.replace(what, by)
                    } else if (replace.action === 'add') {
                        text += by
                    }
                }
            })

            setDisplay(text)

        }, speed)

        return () => clearInterval(interval)
    }, [words, skipCount, forward, textIndex])

    return <span dangerouslySetInnerHTML={{__html: display}} />
}

export default TypingText