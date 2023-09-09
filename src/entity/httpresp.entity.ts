import { INewsData, IBookData } from "../type/apidata.interface";

class HttpResp {
    private code: string;
    private message: string;
    private data: RespData | null = null;

    constructor (code: string = '00', message: string = 'Success') {
        this.code = code;
        this.message = message;
    }

    public setCode = (code: string): void => {
        this.code = code;
    }

    public setMessage = (message: string): void => {
        this.message = message;
    }

    public setData = (data: RespData | null): void => {
        this.data = data;
    }
}

class RespData {
    private total: number = 0;
    private start: number = 0;
    private display: number = 0;
    private type: string = '';
    private items: INewsData[] | IBookData[] | null = null;

    constructor (type: string) {
        this.type = type;
    }

    public setTotal = (total: number): void => {
        this.total = total;
    }

    public setStart = (start: number): void => {
        this.start = start;
    }

    public setDisplay = (display: number): void => {
        this.display = display;
    }

    public setType = (type: string): void => {
        this.type = type;
    }

    public setItems = (items: INewsData[] | IBookData[]): void => {
        this.items = items;
    }
}

export {
    HttpResp,
    RespData
}