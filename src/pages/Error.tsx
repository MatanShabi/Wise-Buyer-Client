import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {statusText, message} = useRouteError() as {statusText:string, message:string};

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{statusText || message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;