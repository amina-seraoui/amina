import React from 'react'
import * as THREE from 'three'
import {useEffect, useRef} from 'react'
import {OrbitControls} from 'three/examples/jsm/controls/experimental/CameraControls'

const ThreeSkills = ({skills}) => {
    const ref = useRef()

    const init = (renderer, scene, camera, parent, controls) => {
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 4.5

        const getTextureText = (text) => {
            const textCanvas = document.createElement('canvas')
            const ctx = textCanvas.getContext('2d')
            textCanvas.width = 100
            textCanvas.height = 100
            ctx.font = 'Bold 20px Gilroy, sans-serif'
            ctx.fillStyle = '#FFF'
            ctx.textAlign = 'center'

            ctx.fillText(text, 50, 50, 100)
            const texture = new THREE.Texture(textCanvas)
            texture.needsUpdate = true

            return texture
        }

        const getVectors = () => {
            const r = 2.5
            const shape = new THREE.SphereGeometry(r, 6, 4)
            const pts = shape.getAttribute('position').array

            let vectors = []
            // create vectors
            for (let i = 0; i < (pts.length / 3); i++) {
                vectors.push([pts[i * 3], pts[i * 3 + 1], pts[i * 3 + 2]])
            }

            // sort to filter
            vectors.sort()

            // duplicates filter
            vectors = vectors.filter((vector, i) => {
                if (i > vectors.length - 2) return false
                const xDist = vector[0] - vectors[i + 1][0]
                const yDist = vector[1] - vectors[i + 1][1]
                const zDist = vector[2] - vectors[i + 1][2]

                const globalDist = (Math.abs(xDist) + Math.abs(yDist) + Math.abs(zDist))
                return globalDist > r + .2
            })

            // reshuffle
            vectors.sort(() => Math.random() * .5)

            return vectors
        }

        const createTexts = () => {
            const textsGroup = new THREE.Group()
            const vectors = getVectors()
            let index = 0

            // loop on each vectors
            vectors.forEach(v => {
                // reinit index if is the last
                index = index > skills.length - 1 ? 0 : index

                // const geometry = new THREE.BoxGeometry()
                const material = new THREE.SpriteMaterial(
                    {
                        color: 0xFFFFFF,
                        map: getTextureText(skills[index]),
                        transparent: true,
                        alphaTest: .5,
                    }
                )

                const point = new THREE.Sprite(material)
                point.position.set(...v)
                textsGroup.add(point)
                index++
            })

            return textsGroup
        }

        const displayHelpers = () => {
            // units helper
            scene.add(new THREE.Mesh(
                new THREE.BoxBufferGeometry(1, 1, 1),
                new THREE.MeshNormalMaterial() // Matériel de debug
            ))
            // axes helper
            scene.add(new THREE.AxesHelper())
            // scene grid helper
            scene.add(new THREE.GridHelper(2, 9))
        }

        const textsGroup = createTexts()

        scene.add(camera, textsGroup)
        // displayHelpers()

        let ratioY = -0.002
        let ratioX = 0.002

        parent.addEventListener('mousemove', e => {
            ratioY = (e.clientX / parent.offsetWidth - .95) * 0.005
            ratioX = (e.clientY / parent.offsetHeight - 1.35) * 0.005
        })

        const render = () => {
            const w = parent.offsetWidth
            const h = parent.offsetHeight

            textsGroup.rotation.y += ratioY * Math.PI
            textsGroup.rotation.x += ratioX * Math.PI

            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
            renderer.render(scene, camera)

            if (controls) controls.update()

            requestAnimationFrame(render)
        }

        render()
    }

    useEffect(() => {
        const parent = ref.current
        const w = parent.offsetWidth
        const h = parent.offsetHeight
        const scene = new THREE.Scene()
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true // retire la pixelisation mais à un coût sur la performance
        })
        const camera = new THREE.PerspectiveCamera(80, w/h, .1, 1000)
        let controls
        // controls = new OrbitControls(camera, renderer.domElement)

        parent.appendChild(renderer.domElement)
        renderer.setClearColor(0, 0)
        renderer.setSize(w, h)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        init(renderer, scene, camera, parent)

        return () => {
            parent.removeChild(renderer.domElement)
            parent.onmousemove = null
        }
    }, [])

    return <div className="scene" ref={ref} />
}

export default ThreeSkills