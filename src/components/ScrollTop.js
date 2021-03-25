import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scroll({
                top: 0,
                left: 0
            })
        }, 10)
    },[pathname])
    return (
        <>
        </>
    )
}

export default ScrollTop;