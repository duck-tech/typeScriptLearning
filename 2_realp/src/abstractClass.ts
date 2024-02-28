abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void

    getRealTime(): number {
        // some complex calculation
        return 8
    }
}


class Ins extends TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string,
        public burst: number)
        {
            super (cameraMode, filter)
        }

    getSepia(): void {
        console.log('Sepia was applied')
    }
}

const dc = new Ins('test', 'Test',3)
dc.getRealTime()
