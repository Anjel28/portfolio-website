import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../services/api';
import { Box, LinearProgress, Typography } from '@mui/material';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      const data = await fetchSkills();
      setSkills(data);
      setLoading(false);
    };
    getSkills();
  }, []);

  if (loading) return <Typography>Loading skills...</Typography>;

  return (
    <Box sx={{ width: '100%' }}>
      {skills.map((skill) => (
        <Box key={skill.id} sx={{ mb: 2 }}>
          <Typography variant="body1">{skill.name}</Typography>
          <LinearProgress
            variant="determinate"
            value={skill.proficiency}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <Typography variant="caption">{skill.proficiency}%</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;