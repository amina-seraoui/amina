import {useEffect, useState} from 'react'

const useScroll = () => {
    useEffect(() => {
        let scroll
        const container = document.querySelector('[data-scroll-container]')
        const anchors = document.querySelectorAll('a[href^="#"]')
        container && import('locomotive-scroll')
            .then(LocomotiveScroll => {
                scroll = new LocomotiveScroll.default({
                    el: container,
                    smooth: true,
                    lerp: .025,
                    repeat: true,
                    multiplier: 3,
                    gestureDirection: 'both',
                    resetNativeScroll: false,
                    scrollFromAnywhere: false,
                    reloadOnContextChange: true
                })

                scroll.init()

                anchors.forEach(anchor => {
                    anchor.addEventListener('click', e => {
                        e.preventDefault()
                        const target = document.querySelector(anchor.getAttribute('href'))
                        if (target) scroll.scrollTo(target)
                    })
                })
                })
        return () => (scroll ? scroll.destroy() : null)
    }, [])
}

export default useScroll