const NavigationDots = (props: { active: string }) => {
    return (
        <div className='app__navigation'>
            {["home", "about", "work", "skills", "testimonials", "contact"].map((item, index) => {
                return (
                    <a
                        href={`#${item}`}
                        key={item + index}
                        className='app__navigation-dot'
                        style={props.active === item ? { backgroundColor: '#313BAC' } : {}}
                    />
                )
            })}
        </div>
    )
}

export default NavigationDots