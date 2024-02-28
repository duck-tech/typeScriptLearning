interface TakePhoto2 {
    cameraMode: string,
    filter: string,
    burst: number, 
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}    
}

class Youtube implements TakePhoto2, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string,
    ){} 
    
    createStory(): void {
        console.log('Story was created')
    }
}