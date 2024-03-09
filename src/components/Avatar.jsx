import AvatarImage from '../images/photos-profile/avatar.png'

const Avatar = () =>{
    return(
        <div className=' overflow-hidden '>
            <img src={AvatarImage} 
                className='inline-block h-10 w-10 rounded-full'
            />
        </div>
    );
}

export default Avatar;