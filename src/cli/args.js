const parseArgs = () => {
    const args = process.argv
        .slice(2)
        .reduce((acc, arg, index, arr) => {
            if (index % 2 === 0 && index !== arr.length - 1) {
                const formattedValue = `${arg.slice(2)} is ${arr[index + 1]}`;
                acc.push(formattedValue)
            }
            return acc
        }, [])
        .join(', ');

    console.log(args)
};

parseArgs();