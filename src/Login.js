import { useState } from "react"

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event) {
        const { name, value, type, checked } = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function onLogin() {
        console.log(data)
    }
    return (
        <form>
            <button onClick={onLogin}
                disabled={data.username && data.password ? false : true}>
                LOGIN
            </button>

            <input onChange={handleInputChange} value={data.username} name="username" />
            <input onChange={handleInputChange} value={data.password} name="password" type="password" />
            <input onChange={handleInputChange} checked={data.remember} name="remember" type="checkbox" />
        </form>
    )
}