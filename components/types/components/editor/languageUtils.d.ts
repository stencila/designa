export declare type FileFormat = {
  name: string;
  ext: string | null;
  aliases: string[];
};
export declare type FileFormatMap = Record<string, FileFormat>;
export declare const fileFormatMap: FileFormatMap;
/**
 * Attempts to look up a language format by the provided string.
 * Falls back to `Plain Text` if a match cannot be found.
 * @param {string} language - Can be one the format name, file extension, or one of the aliases.
 */
export declare const lookupFormat: (targetFormat: string) => FileFormat;
