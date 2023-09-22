import { Fashion } from "@/types/Fashion.types";

const fashions: Fashion[] = [
    {
        id: 1,
        title: "Modern Women Fashion",
        cover: "/assets/images/modern-women-fashion.png",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        isReversed: false
    },
    {
        id: 2,
        title: "Super Cozy Men Fashion",
        cover: "/assets/images/super-cozy-men-fashion.png",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        isReversed: true
    },
    {
        id: 3,
        title: "Classic Women Fashion",
        cover: "/assets/images/classic-women-fashion.png",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        isReversed: false
    }
];

export default fashions;