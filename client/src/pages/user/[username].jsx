function UserPage(user) {
    return (
        <>
        Hello {user.username}!
        </>
    )
}

UserPage.getInitialProps = async (context) => {
    const { username } = context.query;
    
    const res = await fetch(`${process.env.API_HOST}/user/${username}`);
    const json = await res.json();

    return json;
}

export default UserPage;