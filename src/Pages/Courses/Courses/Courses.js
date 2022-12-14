import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Courses = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            
            {
                categoryCourse.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
            
        </div>
    );
};

export default Courses;