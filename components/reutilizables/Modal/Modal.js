import React from 'react';
import Popup from 'reactjs-popup';
import styles from "./styles";

export default function Modal(props) {
    const {open, closeModal, children} = props;
    return (
        <>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </Popup>
            <style jsx>{styles}</style>
        </>
    )
}