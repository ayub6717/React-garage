/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function Text({ addEmoji, addBracket }) {
    let text = 'I am JavaScript Programming Language.';
    if (addEmoji) {
        text = addEmoji(text, '💜');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>;
}
