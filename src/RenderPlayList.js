function RenderPlayList ({arr}) {

    


    return arr.map(track => (
        <div>
            <p>{track.id}</p>
        </div>
    ))
};

export default RenderPlayList;