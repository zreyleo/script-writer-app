const TEXTEDITOR_COMMON_STYLES = `
    rounded border-2 border-blue-300  dark:text-white
`;

const TEXTEDITOR_FORM_FIELDS_STYLES = `${TEXTEDITOR_COMMON_STYLES} dark:bg-gray-900`;

export const TEXTEDITOR_SLUGLINE_STYLE = `${TEXTEDITOR_FORM_FIELDS_STYLES} px-3 uppercase`;

export const TEXTEDITOR_SCENE_ACTION_STYLE = `${TEXTEDITOR_FORM_FIELDS_STYLES} p-3 col-span-6 resize-none`;

export const TEXTEDITOR_INPUT_SUBMIT_STYLE = `
    ${TEXTEDITOR_COMMON_STYLES} 
    col-start-5 col-end-7 cursor-pointer 
    bg-blue-500 text-white dark:bg-white dark:text-gray-900
    font-bold
    uppercase
`;
