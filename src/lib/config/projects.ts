export type Project = {
    id: string
    name: string
    tags?: string[]
    feature?: string
    description?: string
    img: string
    link?: string
  }
  
  export const projects: Project[] = [
    {
      id: 'openvino',
      name: 'OpenVINO™',
      tags: ['AI', 'Python', 'C++'],
      description: "Open-source project focused on optimizing and deploying AI inference. TBA",
      feature: 'tech lead',
      img: 'https://github.com/openvinotoolkit/openvino/raw/master/docs/img/openvino-logo-purple-black.png',
      link: 'https://github.com/openvinotoolkit/openvino'
    },
    {
      id: 'pybind11',
      name: 'pybind11',
      tags: ['bindings', 'Python', 'C++'],
      feature: 'contributor/community member',
      description:
        "'Seamless operability between C++11 and Python' TBA",
      img: 'https://github.com/pybind/pybind11/raw/master/docs/pybind11-logo.png',
      link: 'https://github.com/pybind/pybind11'
    }
  ]