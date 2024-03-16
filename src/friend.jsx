export default function Friend({friend}) {
const {email, name} = friend;
    return (
        <div className="box">
            <h4>Name : {name} </h4>
            <p>Email : {email} </p>
        </div>
    )

}