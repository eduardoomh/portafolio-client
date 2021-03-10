import {useState, useEffect, useRef} from "react";

export default function useIntersecting(margin){
    const [show, setShow] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log(entries[0])

            if (el.isIntersecting === true) {
                setShow(true);
                observer.disconnect();
                console.log("perfil datos is intersecting")
            }
        }

        let observer = new IntersectionObserver(onChange, {
            rootMargin: margin
        });

        observer.observe(ref.current);

        return () => observer.disconnect()

    })

    return {show, ref}

}