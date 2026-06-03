import React from 'react';

const About = () => {
  const skills = [
    { name: "Frontend", level: 85 },
    { name: "Backend", level: 65 },
    { name: "Programming", level: 80 },
    { name: "Tech_tools", level: 70 },
    { name: "MERN", level: 60 },
    { name: "Designing", level: 80 },
  ];

  return (
    <div
      style={{
        padding: '25px',
        minWidth: '100%',
        margin: '0 auto',
        backgroundColor: "#0b0b0b",
        border:"0.0001rem solid rgb(65, 64, 64)",
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      }}
    >
      <p className='inhead' style={{ color: 'white', textAlign: 'left', marginBottom: '24px' }}>
        My Skills
      </p>

      {skills.map((skill) => (
        <div key={skill.name} style={{ marginBottom: '30px' }}>
          <div
            style={{
              color: 'rgb(240, 236, 236)',
              marginBottom: '8px',
              fontWeight: '500',
              fontSize: '1rem',
              // backgroundColor:'yellow',
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}
          >
            <div>{skill.name}</div>
            <div>{skill.level}%</div>
          </div>

          <div
            style={{
              backgroundColor: '#333',
              borderRadius: '10px',
              overflow: 'hidden',
              height: '8px',
            }}
          >
            <div
              style={{
                width: `${skill.level}%`,
                backgroundColor: '#6B26D9',
                height: '100%',
                transition: 'width 0.5s ease-in-out',
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
