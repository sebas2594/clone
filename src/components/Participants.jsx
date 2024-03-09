import AvatarImage1 from '../images/photos-profile/avatar.png'
import AvatarImage2 from '../images/photos-profile/profile-2.jpg'
import AvatarImage3 from '../images/photos-profile/profile-3.jpg'

const Participants = () => {
    
    return(       

        <div className="flex -space-x-4 overflow-hidden items-center p-2" >
            <img src={AvatarImage2} alt="profile2" className='inline-block h-10 w-10 rounded-full ring-2 ring-white'/>            
            <img src={AvatarImage3} alt="profile1" className='inline-block h-10 w-10 rounded-full ring-2 ring-white'/>
            <img src={AvatarImage1} alt="profile1" className='inline-block h-10 w-10 rounded-full ring-2 ring-white'/>
        </div>
    );
}

export default Participants;