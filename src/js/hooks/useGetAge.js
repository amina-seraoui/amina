const useGetAge = (birth) => {
    // calcule la différence en timestamp
    return new Date(Date.now() - new Date(birth).getTime()).getUTCFullYear() - 1970
}

export default useGetAge