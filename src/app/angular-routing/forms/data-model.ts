export class Model {
    
    
    _title:String
    getTitle():String {
        return this._title
    }

    setTitle(title:String) {
        this._title = title
    }

    description:String

    constructor(title:String, descr:String) {
        this._title=title
        this.description=descr
    }
}