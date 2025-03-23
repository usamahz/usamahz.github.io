---
title: "Performance Evaluation of Object Detection Algorithms"
description: "A comprehensive analysis of different object detection algorithms including Mask-RCNN, SSD, YOLOv3, YOLOv4, and Tiny-YOLOv4, comparing their performance in terms of inference times and accuracies."
pubDate: "Mar 6 2023"
heroImage: "/post_img.webp"
tags: ["computer-vision", "object-detection", "deep-learning", "yolo", "mask-rcnn", "ssd"]
---

Object detection is a crucial task in computer vision and has applications in various fields. In this study, we evaluated the performances of five different object detection algorithms — Mask-RCNN, SSD, YOLOv3, YOLOv4, and Tiny-YOLOv4 — based on their inference times and accuracies. We used pre-trained models on a test dataset to assess the algorithms' strengths and weaknesses in detecting objects based on their sizes and weather conditions.

Our results indicate that YOLOv4 with Transfer Learning is the most efficient algorithm for applications. Moreover, transfer learning is an optimal solution for object detection with deep learning algorithms, reducing the training effort required and future research could focus on improving inference speed while preserving accuracy using the TensorRT framework.

## Analysis

The algorithms had their performances vary in discrete aspects, some had better inference times while getting the accuracy trade-off, and vice–versa, and while some did very well in both. They performed differently on the object types — depending on their sizes, and weather conditions depicted in the images.

### Mask-RCNN

The performance of the Mask-RCNN algorithm had 'good' accuracy considering the mAP score which was obtained on the test dataset but the speed in generating the detections was too 'slow', theoretically as the architecture involves the Region Proposal Network which generates the binary masks for each of the region of interest samples obtained from the feature maps. But, keeping in mind that this algorithm produces a mask around the objects, which gives a clear boundary of the object extents, this algorithm could be suitable in applications that can withstand its inference rates (not of importance), but the masking of the objects is viable and clearly, this cannot be implemented in applications where the decision needs to be rapid, and the same applies in other safety-critical applications.

### SSD

The SSD algorithm had 'fast' inference times, but the accuracies being traded off, objects of large sizes were detective precisely but those in challenging sizes and conditions were ignored, this is because its architecture does not include the Fully Connected layers at the end of the model, instead which uses the Non-Maximum Suppression (NMS) processes to create the predictions (bounding boxes). And this algorithm did not make false detections of objects, which is something that makes this stand out.

### YOLOv3

The YOLO v3, maintained 'good' accuracies and inference times, balancing them well. The detections were performed, but many of these detections had the IoU<=50% (mainly in the small object classes) which is considered a false detection, but it worked well on discrete object sizes and weather conditions, this algorithm has the potential to be improved and perform better and deployed in real-time applications.

### YOLOv4

The YOLO v4 stood up to fill up the gaps seen in the YOLOv3, and this algorithm is the best performer overall it was successful in drawing clear boundaries with the correct IoUs around the objects of various sizes and lighting conditions. The inference times were similar to the YOLOv3 but the accuracies were seen as an improvement as this architecture adds up with the CSPDarknet53 framework spatial pyramid pooling and MISH. From the detection results, the results are 'True Positive' classifications prominently in classifying objects of all sizes and lighting conditions, which indicated that the model does perform well with detecting small objects and the ones with intersecting bounding boxes, the objects which were successfully detected had very good AP and mAP value. From all the metrics benchmarked this is the best algorithm to be built upon the enhancements by the method of transfer learning.

### Tiny-YOLOv4

The compressed version of the latter, had the most impressive inference times due to its small architecture having fewer convolutional layers, but is not clearly suitable to be deployed in larger, advanced applications. This is suitable to be used on an embedded device and lower computation power machines built to perform niche tasks like face-mask detections, etc.

### YOLOv4 with Transfer Learning

This modified model performed better with the use of a re-trained model obtained by the transfer learning method. The inference time was considerably similar to the previous model but the accuracies obtained were 'enormous'. This experiment made absolutely clear that with these deep learning models, the pre-trained models serve as a foundational dataset that could be enhanced and improved with the use of transfer learning methods to be made efficient and precisely apt for the specific application considered to be built, and justifying the 'transfer' of knowledge from one model to another model.

Complex objects such as the 'bicycle' were detected in a good number, along with the discrete sizes and lighting conditions of other classes as well, which is the best result obtained till now. The re-training was done by considering the images consisting of objects from only these 5 classes, it was still a long process but it is fairly efficient enough compared to training the model from absolute scratch (without the use of a pre-trained model) which could require hundred thousands of images from tens of classes, demanding super high computation power and time.

## Conclusion

To conclude, the best performer of all the algorithms tested with pre-trained models is YOLOv4. And, this algorithm is proved to be enhanced by using the method of transfer learning which is shown by the positive increase in its performance metrics, and it is the most efficient algorithm to be deployed in applications.

Lastly, the pre-trained model with the addition of transfer learning is the optimal solution in the world of object detection which opens the door to employ deep learning algorithms in a new application with very less training effort.

## Future Works

In further studies, increasing the inference speed while preserving the accuracy of the model obtained with the transfer learning method could be studied and carried out by using the TensorRT framework which converts the trained model into a TRT format, and the algorithm can be running on unseen data using that format which increases the speed of detections while maintaining the accuracies. 