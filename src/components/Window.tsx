import React from 'react';
import Button from './Button.tsx';
import { createPortal } from 'react-dom';

interface WindowProps {
    children?: React.ReactNode;
    buttons?: string[];
}

const Window: React.FC<WindowProps> = ({
                                           children = "Undefined",
                                           buttons = ["ok"]
                                       }) => {
    const [visible, setVisible] = React.useState(true);

    return createPortal(
        <dialog open={visible}>
            <div className='dialogDiv'>
                <b className='windowContent'>{children}</b>
            </div>
            <div className='dialogButtonDiv'>
                {buttons.map((content) => (
                    <Button key={content} onClick={() => setVisible(false)}>
                        {content}
                    </Button>
                ))}
            </div>
        </dialog>,
        document.body
    );
};

export default Window;