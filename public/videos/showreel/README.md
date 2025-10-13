# Showreel Video Location

## Instructions

Upload your `showreel.mp4` file to this directory:

```
/public/videos/showreel/showreel.mp4
```

## Implementation Notes

The Cover component is currently using a placeholder image but is ready to be updated to use the video once uploaded.

To implement the video:
1. Upload `showreel.mp4` to this directory
2. Update `/src/components/home/Cover.tsx` to replace the Image component with a video element
3. The video should:
   - Autoplay
   - Loop
   - Be muted by default
   - Cover the full screen (similar to the current image)
   - Maintain the same gradient overlay and text layout

