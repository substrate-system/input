import { attributes } from '@substrate-system/util/to-string'

/**
 * HTML attributes as object
 */
export type Attrs = Partial<{
    id:string;
    class:string;
    disabled:string|true;
    autofocus:string|true;
    type:string;
    tabindex:number|string;
    value:string;
    required:boolean;
    placeholder:string|string[];
    name:string;
    autocomplete:string;
}>

export function html (attrs:Attrs):string {
    return `<input ${attributes(attrs)} />`
}
