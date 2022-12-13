

export const getExamples = async () => {
    const response = await fetch("/tdla/examples.json");

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json();
}