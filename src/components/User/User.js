import css from './user.module.css';

const User = ({user, getUser}) => {
    const {id, name} = user;

    return (

        <div className={css.wrap}>
            <div className={css.user}>{id} - {name}</div>


                <button onClick={() => getUser(user)}>Details user</button>


             </div>

    );
};

export default User;