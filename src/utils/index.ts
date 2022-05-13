export function getIcon(typeFile: string) {
    switch (typeFile) {
        case 'pdf':
            return 'fa-file-pdf'
        case 'docx':
            return 'fa-file-word'
        case 'xlsx':
            return 'fa-file-excel'
        case 'pptx':
            return 'fa-file-powerpoint'
        case 'csv':
            return 'fa-file-csv'
        case 'txt':
            return 'fa-files-lines';
        case 'png' || 'jpg' || 'jpeg':
            return 'fa-image'
        case 'log':
            return 'fa-file-lines'
        case 'rar' || 'zip':
            return 'fa-file-zipper'
        case 'html' || 'js' || 'ts' || 'rs':
            return 'fa-file-code'
        case 'mp4' || 'avi' || 'flv':
            return 'fa-video'
        case 'mp3' || 'wav' || 'wma':
            return 'fa-file-music'
        case 'rtf':
            return 'fa-file-chart-column'
        case 'exe':
            return 'fa-windows'
        case 'pkg':
            return 'fa-apple'
        case 'jsx' || 'tsx':
            return 'fa-react'
        default:

            return 'fa-file-binary'
    }
}