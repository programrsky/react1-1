import React from 'react';

export default function Book(props) {
    return (
        <div>asds
            <h1>{`이책의 이름은 ${props.name}입니다.`}</h1>
            <h1>{`이책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h1>
        </div>
    );
}
