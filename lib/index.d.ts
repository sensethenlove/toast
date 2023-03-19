declare const _default: ({ type, items }: ShowToastProps) => void;
export default _default;
declare global {
    interface Window {
        $closeToast: (toast: HTMLElement) => void;
    }
}
export type ShowToastProps = {
    type: 'info' | 'success';
    items: string[];
};
