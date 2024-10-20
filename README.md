# Image Morphing

This project demonstrates a simple **image tweening algorithm** written in C that morphs a small circle into a large circle by generating intermediate frames using **linear interpolation**. The project creates a series of SVG files to visualize the morphing process.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Current Issues](#current-issues)

## Overview
This is a basic project that showcases how to perform image morphing between two geometric shapes. The project generates a series of SVG files representing each step of the morphing process.

You can run this project to see a smooth transition from a small circle to a larger one, with all the intermediate shapes saved as separate SVG files in c.

## Features
- Two versions C and Python
    - Both contain the very basic implementation of the interpolating methods.
- Python is the only one that can do the following:
    - Open/close SVG files
    - Extract the path details
    - Generates SVG files for each frame of the morphing animation based on the path details.
    - Basic linear interpolation between two shapes.
    - Avoids overwriting files if they already exist.
    - Display results (testing).


## Project Structure
1) src - contains all source code in C and python
-  C contains the very basics of interpolating methods.
- Python contains the actual image morph that extracts the svg files and uses interpolation method to morph a circle shape into a triangle.

## how It Works
1) 1.c: to understand how to generate a frame with respect to the target svg from source svg, we must understand the basics of interpolating. Interpolating is finding an in-between value depending on a factor of 't' where it is from 0 to 1 (think of 0 as the starting and 1 the ending). In 1.c soruce code, we start with the source and have an end point, with the help of the linear interpolation formula, we can calculate the result with respect to t (remember t is the value between 0 - 1).
2) 2.c: a more advance use of the interpolation method is creating an object, we used x and y coordinates. With the previous knowledge, we calculate the results for both x and y coordinates which gives us our t value.
3) 3.c: now we move onto 2d-coordinates of a small square and large square, same idea. We calculate their separate coordinates and it gives us their respective t value results.
4) 4.c: lets apply the knowledge from the previous intermediate methods but now we wish to generate an SVG file for the given results of t. We don't extract anything, we have prewritten circle(s) coordinates wihtin a method.
5) 5.c: we want to morph a small circle svg to a large circle svg, so we import libxml libraries to extract the path details of said svg files, traverse through the svg to find circle element and extract the details. We get those coordinates and place it into our morph method that we created, we then write (generate) the corresponding svg file for the current frame.
6) 6.c: a triangle to circle svg- instead of using a basic interpolation linear method we will use the bezier method which is defined by 3 points, starting, middle, and ending point.

## Current Issues
1) morph2.py cannot do complex shapes yet.
2) displaying results is a mock up and has nothing to do with the svg files.
3) parallelization hasn't been implemented.
4) I tried to use xml library in C but was going into a lot of issues in regards to extracting path details from svg which is why I changed to python for the actual morphing (morph2.py).
5) We only have less than 2 weeks to finish :(

