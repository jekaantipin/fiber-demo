import React from 'react';
import E from './e'
import H from './h'
import L from './l'
import O from './o'
import R from './r'
import T from './t'
import A from './a'
import I from './i'
import K from './k'
import F from './f'
import B from './b'
import C from './c'
export const letterMap = (k) => {
    return {
        'e': <E k={k} />,
        'h': <H k={k} />,
        'l': <L k={k} />,
        'o': <O k={k} />,
        'r': <R k={k} />,
        't': <T k={k} />,
        'a': <A k={k} />,
        'i': <I k={k} />,
        'k': <K k={k} />,
        'f': <F k={k} />,
        'b': <B k={k} />,
        'c': <C k={k} />,
    }
};
