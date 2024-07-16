import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";

export default function Home() {
    return (
        <div>
            <Heading>Khám phá</Heading>
            <CourseGrid>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
            </CourseGrid>
        </div>
    );
}
