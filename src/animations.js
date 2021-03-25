

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: -300
    },
    show: {
        opacity: 1,
        y: 1,
        transition: {
            duration: 0.8,
            when: 'beforeChildren',
            staggerChildren: 0.5,
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
        }
    }
}

export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 2}
    }
}

export const lineAnim = {
    hidden: {width: '0%'},
    show: {
        width: '100%',
        transition: {duration: 0.75}
    }
}

export const photoAnim = {
    hidden: {scale: 1.5, opacity: 0, transition: {duration: 2}},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.5,
        }
    }
}

export const titleAnim = {
    hidden: {y: 200, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.5, ease: 'easeOut'}
    }
}

export const skillsAnim = {
    hidden: {y: 200, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: 'easeOut'}
    }
}
