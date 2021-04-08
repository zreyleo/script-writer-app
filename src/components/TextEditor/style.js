const TEXTEDITOR_COMMON_STYLES = `
    rounded border-2 border-blue-300  dark:text-white
`;

const TEXTEDITOR_FORM_FIELDS_STYLES = `${TEXTEDITOR_COMMON_STYLES} dark:bg-gray-900`;

export const TEXTEDITOR_SLUGLINE_STYLE = `${TEXTEDITOR_FORM_FIELDS_STYLES} px-3 uppercase`;

export const TEXTEDITOR_SCENE_ACTION_STYLE = `${TEXTEDITOR_FORM_FIELDS_STYLES} p-3 col-span-6 resize-none`;

export const BUTTON_NEW_CHARACTER_DIALOG = `${TEXTEDITOR_COMMON_STYLES} col-span-2`;

export const TEXTEDITOR_INPUT_SUBMIT_STYLE = `
    rounded border-2 
    col-start-5 col-end-7 cursor-pointer 
    text-center
    bg-blue-500 text-white
    font-bold
    uppercase
`;

export const NEW_CHARACTER_FORM_LABELS = `dark:text-white flex justify-between items-center`;

export const NEW_CHARACTER_FORM_INPUTS = `${TEXTEDITOR_FORM_FIELDS_STYLES} h-full px-3`;

export const NEW_CHARACTER_LONG_DESC = `dark:text-white flex justify-between`;

export const CANCEL_BUTTON = `${BUTTON_NEW_CHARACTER_DIALOG} bg-red-500 text-white`;
