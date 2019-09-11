// This file will add both p5 instanced and global intellisence 
import module = require('p5');
import * as p5Global from 'p5/global' 

export = module;
export as namespace p5;

declare global {
    function loadSound(
        path: string | any[],
        successCallback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any,
        whileLoading?: (...args: any[]) => any
    ): p5.SoundFile;
    interface Window {
        p5: typeof module;
    }
}
