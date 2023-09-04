import './MyProfile.css';

const user = {
    fullName: 'Yura Moryliak',
    imageUrl: 'data:image/jpeg;base64,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',
    imageSize: 100,
};

export default function MyProfile() {
    return (
        <div className='my-profile-wrapper'>
            <h4>{ user.fullName }</h4>

            <img
                className='my-profile-avatar-img'
                src={ user.imageUrl }
                alt={ `Photo of ${ user.fullName }` }
                style={{ width: user.imageSize, height: user.imageSize }} />
        </div>
    );
}