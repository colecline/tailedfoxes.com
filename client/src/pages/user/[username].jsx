function UserPage(user) {
    return (
        <>
        Hello {user.username}!
        </>
    )
}

UserPage.getInitialProps = async (context) => {
    const { username } = context.query;
    
    const res = await fetch(`https://api.tailedfoxes.com/user/${username}`);
    const json = await res.json();

    return json;
}

export default UserPage;