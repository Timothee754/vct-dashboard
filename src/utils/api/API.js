import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Profile ({ userId }) {
    const { data, error, isLoading } = useSWR(`/api/user/${userId}`, fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    // render data
    return <div>hello {data.name}!</div>
}