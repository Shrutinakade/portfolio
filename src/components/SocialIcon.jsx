import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';

const SocialIcon = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedinIn size={30} />
                </>
            ),
            href: 'https://linkedin.com/in/shruti-nakade-25031b226',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Shrutinakade',
            style: 'rounded-tr-md',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:nakadeshruti2003@gmail.com',
            style: 'rounded-tr-md',
        },
        {
            id: 4,
            child: (
                <>
                    LeetCode <SiLeetcode size={30} />
                </>
            ),
            href: 'https://leetcode.com/shrutinakade/',
            style: 'rounded-tr-md',
        },
    ];

    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li
                        key={id}
                        className={
                            'flex justify-between cursor-pointer items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' +
                            ' ' +
                            style
                        }
                    >
                        <a href={href} target="_blank" 
                          className='flex justify-between items-center w-full text-white'  rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialIcon;
