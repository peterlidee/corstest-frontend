// the home page, returns button that calls testCookie mutation
// textCookie generates random number, sets cookie with that numbers and returns that number

import { gql, useMutation } from '@apollo/client';

const TEST_MUTATION = gql`
    mutation TEST_MUTATION{
        testCookie
    }
`;

function Index(props) {
    // apollo mutation hook
    const [testCookie, { error, data, loading }] = useMutation(TEST_MUTATION);
    if(error) return 'error'
    if(loading) return 'loading'
    console.log('data', data) // returns number after mutation is called
  
    return (
        <div>
            <button type="button" onClick={() => {
                const res = testCookie().catch(error => console.log(error.message));
            }}>
                set cookie
            </button>

            {!error && !loading && !data && <p>Cookie not set yet</p>}
            {!error && !loading && data && <p>Cookie value: {data.testCookie}</p>}
        </div>
    );
}

export default Index;