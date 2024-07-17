import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.actions";

export default async function Home() {
    const user = await createUser({
        clerkId: "clerk_123",
        email: "cloly@gmail.com",
        username: "cloly",
    });
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
