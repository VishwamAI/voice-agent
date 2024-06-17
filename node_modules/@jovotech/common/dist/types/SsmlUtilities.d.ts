export declare class SsmlUtilities {
    static isPlainText(ssml: string): boolean;
    static buildAudioTag(src: string): string;
    static isSSML(text: string): boolean;
    static toSSML(text: string): string;
    static removeSSMLSpeakTags(ssml: string): string;
    static removeSSML(ssml: string): string;
}
