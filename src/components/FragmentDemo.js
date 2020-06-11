import React from 'react';

function FragmentDemo(props) {
    const items = [{id:1, name:"aaa"}, {id:2, name:'bbbb'}]
    return (
        <React.Fragment>
            <h1>
                FragmentDemo
            </h1>
            <p>werwewrewrewrewrewer</p>
            {/* can use key parameter with React.Fragement but not with empty tags */}
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>{item.id}</h1>
                        <p>{item.name}</p>
                    </React.Fragment>
                ) )
            }
        </React.Fragment>
        // <>
        //     <h1>
        //         FragmentDemo
        //     </h1>
        //     <p>werwewrewrewrewrewer</p>
        // </>
    );
}

export default FragmentDemo;