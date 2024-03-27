/// <reference types="react" />
import type { BubbleProps } from 'flowise-embed';
type Props = BubbleProps;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'start-ai-chatbot': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export declare const BubbleChat: (props: Props) => null;
export {};
//# sourceMappingURL=BubbleChat.d.ts.map