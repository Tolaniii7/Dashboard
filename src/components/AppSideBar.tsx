import {  User2, ChevronUp  } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar";
import { Link } from "react-router-dom";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { LayoutDashboard, FileBarChart, MessageSquare, Settings2 } from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    subItems: [
      { title: "Reports", path: "/reports" ,  icon: FileBarChart,},
      {title: "Prompts", icon: MessageSquare, path: "/prompts"},
      {  title: "Optimize",  icon: Settings2,  path: "/optimize",},
    ]
  }]

import { Brain, FileText, Smile } from "lucide-react";

export const sidebarItems2 = [
    
      {
        title: "Intelligence",
        icon: Brain,
        path: "/insight/intelligence",
      },
      {
        title: "Citations",
        icon: FileText,
        path: "/insight/citations",
      },
      {
        title: "Sentiment",
        icon: Smile,
        path: "/insight/sentiment",
      },
    
];

import { Bot, Cpu, Activity } from "lucide-react";

export const sidebarItems3 = [
  {
    title: "Crawlers",
    icon: Bot,
    path: "/crawlers",
  },
  {
    title: "LLM",
    icon: Cpu,
    path: "/llm",
  },
  {
    title: "Traffic",
    icon: Activity,
    path: "/traffic",
  },
];





const AppSideBar = () => {
  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader className="py-4">
        <SidebarMenu>
            <SidebarMenuButton asChild>
                <Link to={'/'}>
                    <img src= "/ai.png" alt="logo" width={50} height={50} />
                    <span>LaniBanks</span>
                </Link>
                
            </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>

        <SidebarSeparator/>

      <SidebarContent >
        <SidebarGroup >
            <SidebarGroupContent>
                <SidebarMenu>
                    {sidebarItems.map((item)=>(<SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <Link to={'/'}>
                                <item.icon/>
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>

                        {item.subItems && (
                          <ul className="ml-6 mt-2 space-y-1">
                            {item.subItems.map((sub) => (
                              <li key={sub.title}>
                                <Link to={sub.path}  className="block px-2 py-1 text-sm text-gray-500 hover:text-gray-900">
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                    </SidebarMenuItem>))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator/>


        <SidebarGroup >
            <SidebarGroupLabel>INSIGHTS</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {sidebarItems2.map((item)=>(<SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <Link to={item.path}>
                                <item.icon/>
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator/>


        <SidebarGroup >
            <SidebarGroupLabel>ANALYTICS</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {sidebarItems3.map((item)=>(<SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <Link to={item.path}>
                                <item.icon/>
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>

        <SidebarSeparator/>

      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <SidebarMenuButton >
                        <User2/>Lani Banks <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem> My Account</DropdownMenuItem>
                    <DropdownMenuItem> Settings</DropdownMenuItem>
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                    
                </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  )
}

export default AppSideBar
