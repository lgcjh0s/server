import { INewsData, IBookData } from "../type/apidata.interface";

class HttpResp {
    private statusCode: number;
    private statusMessage: string;
    private data: RespData | null = null;

    constructor (statusCode: number = 200, statusMessage: string = 'Success') {
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
    }

    public setCode = (statusCode: number): void => {
        this.statusCode = statusCode;
    }

    public setMessage = (statusMessage: string): void => {
        this.statusMessage = statusMessage;
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